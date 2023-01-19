import React from "react";
import PropTypes from "prop-types";
import "./modale.css";
/**
 *
 * Component shoudl create a modal pop-up
 * ### Modal
 */
export const Modale = ({ displayModale, onHide, title, content }) =>{
  return displayModale &&(
    <>
      <div
        id="myModal"
        className="modal"
        aria-hidden="true"
      >
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" aria-hidden="true" onClick={onHide}>
              &times;
            </span>
            <h2>{title}</h2>
          </div>
          <div className="modal-body">
            <h3>{content}</h3>
          </div>
          <div className="modal-footer">
            <button className="btn-close" onClick={onHide}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}; 

Modale.propTypes = {
  displayModale: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  title: PropTypes.string,
  content: PropTypes.string
};

Modale.defaultProps = {
  onHide: () => {},
  displayModale: true,
};
