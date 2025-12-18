import React from "react";

interface SearchFilterProps {
    onSearch: (query: string) => void;
    placeholder?: string;
    children?: React.ReactNode;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
    onSearch,
    placeholder = "Search...",
    children,
}) => {
    return (
        <div className="search-filter-row">
            <div className="search-container">
                <input
                    type="text"
                    placeholder={placeholder}
                    className="search-input"
                    onChange={(e) => onSearch(e.target.value)}
                />
            </div>
            {children && <div className="filter-controls">{children}</div>}
        </div>
    );
};

export default SearchFilter;
