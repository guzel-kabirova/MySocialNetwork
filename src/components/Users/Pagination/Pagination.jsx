import classes from './Pagination.module.css';
import React, {useState} from 'react';
import leftArrow from '../../../svg/leftArrow.svg';
import rightArrow from '../../../svg/rightArrow.svg';

const Pagination = (props) => {
    const {totalItemsCount, pageSize, currentPage, onCurrentPage, portionSize = 20} = props;
    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const [portionNumber, setPortionNumber] = useState(1);
    const portionsCount = Math.ceil(pagesCount / portionSize);
    const leftPortionPage = (portionNumber - 1) * portionSize + 1;
    const rightPortionPage = portionNumber * portionSize;

    return (
        <div className={classes.wrapperPage}>
            {portionNumber > 1 &&
            <div className={classes.arrowBtn}
                 onClick={() => {
                     setPortionNumber(portionNumber - 1);
                     onCurrentPage(leftPortionPage - portionSize);
                 }}>
                <img src={leftArrow}/>
            </div>
            }

            {
                pages
                    .filter(page => page >= leftPortionPage && page <= rightPortionPage)
                    .map(page =>
                        <span key={page}
                              className={currentPage === page ?
                                  `${classes.pageNumber} ${classes.pageNumberSelected}` : classes.pageNumber}
                              onClick={(e) => {
                                  onCurrentPage(page);
                              }}>
                                {page}
                        </span>
                    )
            }
            {portionNumber < portionsCount &&
            <div className={classes.arrowBtn}
                 onClick={() => {
                     setPortionNumber(portionNumber + 1);
                     onCurrentPage(rightPortionPage + 1);
                 }}>
                <img src={rightArrow}/>
            </div>
            }
        </div>
    );
};
export default Pagination;