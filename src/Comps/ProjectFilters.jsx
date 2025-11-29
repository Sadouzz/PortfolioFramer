import React from 'react';

export default function ProjectFilters({ filters, activeFilter, onFilterClick }) {

    return (
        <div className="row justify-content-center mb-5">
            <div className="col-lg-12">
                <div className="d-flex align-items-center flex-wrap gap-3">
                    <span style={{
                        fontSize: '11px',
                        color: '#999',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginRight: '10px'
                    }}>
                        filtres
                    </span>
                    {filters.map((filter) => {
                        const isActive = activeFilter === filter.key;
                        return (
                            <button
                                key={filter.key}
                                style={{
                                    background: 'transparent',
                                    border: isActive ? '2px solid #cc001e' : '2px solid #ddd',
                                    borderRadius: '50px',
                                    padding: '4px 12px',
                                    fontSize: '11px',
                                    color: isActive ? '#cc001e' : '#333',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                }}
                                onClick={() => onFilterClick(filter.key)}
                                onMouseEnter={(e) => {
                                    if (!isActive) {
                                        e.target.style.borderColor = '#cc001e';
                                        e.target.style.color = '#cc001e';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isActive) {
                                        e.target.style.borderColor = '#ddd';
                                        e.target.style.color = '#333';
                                    }
                                }}
                            >
                                {isActive ? <span style={{ color: '#cc001e' }}>/</span> : <></>}
                                
                                {filter.label}
                                <span
                                    style={{
                                        fontSize: '13px',
                                        color: '#999',
                                        fontWeight: '400'
                                    }}
                                >
                                    ({filter.count})
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}