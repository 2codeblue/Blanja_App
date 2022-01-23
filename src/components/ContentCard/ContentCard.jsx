import React from 'react';

const ContentCard = (props) => {
  return (
    <div className={`card rounded-3 shadow ${props.styleCard}`}>
      {props.cardHeader && (
        <div className={`card-header bg-transparent p-3 ${props.styleHeader}`}>{props.cardHeader}</div>
      )}
      {props.cardBody && <div className={`card-body ${props.styleBody}`}>{props.cardBody}</div>}
      {props.cardFooter && <div className={`card-footer bg-transparent ${props.styleFooter}`}>{props.cardFooter}</div>}
    </div>
  );
};

export default ContentCard;
