import React, { useContext } from 'react';
import { StoreContext } from '../main';
import { useObserver } from 'mobx-react';

export default function Count(){
  const store = useContext(StoreContext);
  console.log(store)
  return useObserver(() => (
        <div className="row reactions-count" >
            <div className="col-sm" align="left">
                <i className="fa fa-thumbs-up" />{store.likesCount}
            </div>
            <div className="col-sm" align="right">
                {store.commentsCount} comments
            </div>
        </div>
  ))
}
