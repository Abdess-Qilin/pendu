import PropTypes from 'prop-types'

export function Link({link, text}){
    return(
        <>
        <div>
            <a href={link}>{text}</a>
        </div>  
        </>
    )
}

Link.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}