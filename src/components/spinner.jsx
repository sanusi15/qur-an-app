import BounceLoader from "react-spinners/BounceLoader";


const Spinner = () => {
    return(
        <div className="w-screen absolute top-1/3 flex items-center justify-center">
            <BounceLoader
            color="#36d7b7"
            loading={true}
            size={60}
            aria-label="Loading Spinner"
            data-testid="loader"
            speedMultiplier="1"
            />
        </div>
    )
}

export default Spinner