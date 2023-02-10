import React from 'react';
import '../SearchBar/SearchBar.scss';

const SearchBar = ({ toggle }) => {
    return (
        <div className={`searchbar ${!toggle && 'open'} `} >
            <div className='searchbar-div'>
                <div className='searchbar-div-el'>
                    <form className='searchbar-div-el-form'>
                        <div className='searchbar-div-el-form-div'>
                            <input className='searchbar-div-el-form-div-input' placeholder='Axtar' />
                            <div className="input-group-append">
                                <span className="input-group-text"><i className="icon-magnifier"></i></span>
                                <span className="search_toggle btn btn-danger"><i className="icon-close"></i></span>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchBar