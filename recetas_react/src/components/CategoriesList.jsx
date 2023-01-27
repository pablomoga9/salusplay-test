import React from 'react';
import { useEffect, useState, useContext } from 'react';
import EditFormCategory from './EditFormCategory';
import { categoriesContext } from '../context/categoriesContext';
import uuid4 from "uuid4";
import ReactPaginate from 'react-paginate'

function CategoriesList() {
    const { categories, setCategories } = useContext(categoriesContext);
    const itemsPerPage = 10;
    const [itemOffset, setItemOffset] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {

        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(categories.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(categories.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, categories]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % categories.length;
        setItemOffset(newOffset);
    };

    const deleteCategory = async (i) => {
        try {
            const remainingCategories = categories.filter((item, j) => i !== j);
            setCategories(remainingCategories);
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

    })
    return (
        <>
            <ReactPaginate className="paginationItem"
                breakLabel="..."
                nextLabel="next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                pageCount={pageCount}
                previousLabel="previous"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName="page-num"
                previousLinkClassName="page-num"
                nextLinkClassName="page-num"
                activateLinkClassName="active"
            />
            {
                currentItems.map((item,i)=>{
                    return <div key={uuid4()}>
                        <h3>{item.title}</h3>
                        {item.visible==false||0?<h4><b>Oculto</b></h4>:null}
                        <EditFormCategory data={item} remove={()=>deleteCategory(i)}/>
                    </div>
                })
            }
        </>
    )
}

export default CategoriesList