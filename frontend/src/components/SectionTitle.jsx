import React from "react"

const SectionTitle = ({title, description}) => {
    return(
        <>
        <div className="row">
            <div className="col col-12 mb-5">
              <h2 className="text-center">{title}</h2>
              <p className="text-center text-light mx-auto">
                {description}
              </p>
              <hr />
            </div>
          </div>
        </>
    );
};

export default SectionTitle;