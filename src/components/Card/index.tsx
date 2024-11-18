import React from 'react'

function CardProject() {
    return (
        <div className='flex justify-center items-center mt-20'>
            <div className='grid grid-col-3 grid-rows-3 gap-3 text-center items-center'>
                <div className='p-24 bg-black'>
                    <h1>1</h1>
                </div>
                <div className='p-24 bg-black'>
                    <h1>2</h1>
                </div>
                <div className='p-24 bg-black '>
                    <h1>3</h1>
                </div>
                <div className="col-start-1 p-24 bg-black">
                    <h1>4</h1>
                </div>
                <div className='col-start-2 p-24 bg-black '>
                    <h1>5</h1>
                </div>
                <div className='col-start-3 p-24 bg-black '>
                    <h1>6</h1>
                </div>
            </div>
        </div>
    )
}

export default CardProject