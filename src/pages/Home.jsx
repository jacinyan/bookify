import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { listItems } from '../redux/actions/itemActions'

import Item from '../components/Item'
import Loader from '../components/Loader'

const Home = () => {
    const dispatch = useDispatch()
    // get state object
    const itemList = useSelector(state => state.itemList)
    const { loading, items } = itemList

    useEffect(() => {
        dispatch(listItems())
    }, [dispatch])

    return (
        <section className="py-6">
            <div className="container is-fluid">
                <h1 className="mb-5">New Arrivals</h1>
                {loading
                    ? <Loader/>
                    :
                    <div className="columns is-multiline is-vcentered is-mobile">
                        {items.map(item =>
                            <Fragment key={item._id}>
                                <div className="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">
                                    <Item item={item} />
                                </div>
                            </Fragment>
                        )}
                    </div>
                }
            </div>
        </section>
    )
}

export default Home
