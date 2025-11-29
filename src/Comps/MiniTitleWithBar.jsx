export default function MiniTitleWithBar({ content, color = 'red', textColor='' }) {
    return (
        <div className="position-relative d-inline-block">
            <small
                className={`mini-title-with-bar-${color} m-0 text-uppercase raleway text-${textColor}`}
                style={{ fontSize: '0.8rem' }}
            >
                {content}
            </small>
        </div>
    );
}
