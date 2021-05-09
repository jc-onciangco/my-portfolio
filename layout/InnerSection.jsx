const InnerSection = ({children}) => {
    return (
        <>
            <>
                <div className="top-space"></div>
                <div className="inner-content">
                    {children}
                </div>
                <div className="bottom-space"></div>
            </>
            <style jsx>
                {`
                
                    .top-space {
                        height: calc(10vh + 3vw);
                    }

                    .bottom-space {
                        height: 3vw;
                    }

                    .inner-content {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: calc(90vh - 6vw);
                    }
                
                `}
            </style>
        </>
    )
}

export default InnerSection