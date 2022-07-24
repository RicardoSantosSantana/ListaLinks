export default function Spinner() {
    return (
        
            <button className="btn btn-outline-success" type="button" disabled>
                <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                &nbsp;Processing...
            </button>
        
    )
}