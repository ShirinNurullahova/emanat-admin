export default function convertDataToHtml(blocks) {
  var convertedHtml = "";
  blocks?.map((block) => {
    console.log(block);
    switch (block.type) {
      case "header":
        convertedHtml += `<h${block?.data?.level} style="text-align:${block?.tunes?.anyTuneName?.alignment}">${block.data.text}</h${block?.data?.level}>`;
        break;
      case "embded":
        convertedHtml += `<div><iframe width="560" height="315" src="${block?.data?.embed}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`;
        break;
      case "paragraph":
        convertedHtml += `<p style="text-align:${block?.tunes?.anyTuneName?.alignment}">${block?.data?.text}</p>`;
        break;
      case "delimiter":
        convertedHtml += "<br />";
        break;
      case "image":
        convertedHtml += `<img class="img-fluid" src="${block.data.file.url}" title="${block.data.caption}" alt="${block.data.caption}"`;
        break;
      case "list":
        convertedHtml += block?.data?.style == "ordered" ? "<ol>" : "<ul>";
        block?.data?.items.forEach(function (li) {
          convertedHtml += `<li>${li}</li><br/>`;
        });
        convertedHtml += block?.data?.style == "ordered" ? "</ol>" : "</ul>";
        break;
      case "table":
        convertedHtml += "<div class='tc-table tc-table--heading'>";
        block.data.content.forEach(function (li, index) {
          convertedHtml += "<div class='tc-row'>";

          li.forEach((elem) => {
            if (block.data.withHeadings && index == 0) {
              convertedHtml += `<div class='tc-cell tc-border' heading='Heading'>${elem}</div>`;
            } else {
              convertedHtml += `<div class='tc-cell tc-border'>${elem}</div>`;
            }
          });
          convertedHtml += "</div>";
        });
        convertedHtml += "</div>";
        break;
      case "code":
        convertedHtml += `<div class='cdx-block ce-code'><textarea class='ce-code__textarea cdx-input code-custom-style' readonly>${block.data.code}</textarea></div>`;
        break;
      case "quote":
        convertedHtml += `<div class="${
          block.data.alignment == "center" ? "quote-custom-style" : null
        }">`;
        convertedHtml += `<p>${block.data.caption}</p>`;
        convertedHtml += `<blockquote>${block.data.text}</blockquote>`;
        convertedHtml += `</div>`;
        break;
      case "checklist":
        convertedHtml += `<div class="cdx-block cdx-checklist">`;
        block.data.items.forEach(function (item) {
          console.log(item.checked);
          let checkedClass = item.checked ? "cdx-checklist__item--checked" : "";
          convertedHtml += `<div class="cdx-checklist__item ${checkedClass}"><span class="cdx-checklist__item-checkbox"></span><div class="cdx-checklist__item-text">${item.text}</div></div>`;
        });
        convertedHtml += `</div>`;
        break;
      case "alert":
        convertedHtml += `<div class="ce-block__content"><div class="cdx-alert cdx-alert-${block.data.type}"><div class="cdx-alert__message">${block.data.message}</div></div></div>`;
        break;
      case "raw":
        convertedHtml += block.data.html;
        break;
      case "columns":
        convertedHtml += `<div class="ce-editorjsColumns_wrapper">`;
        block.data.cols.forEach(function (item) {
          console.log({ item });
          convertedHtml += `<div class="editorjs_col_0 col-flex-50">`;
          convertedHtml += convertDataToHtml(item.blocks);
          convertedHtml += `</div>`;
        });
        convertedHtml += `</div>`;
        break;
      default:
        console.log("Unknown block type", block.type);
        break;
    }
  });
  console.log({ convertedHtml });
  return convertedHtml;
}
