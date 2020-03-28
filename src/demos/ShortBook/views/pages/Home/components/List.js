import React, { memo } from "react";
import { ListItem, ListInfo, LoadMore } from "../style";
import { Link } from "react-router-dom";

export default memo(({ articleList, getMoreList, articlePage }) => {
    return (
        <div>
            {
                articleList.map((item, index) => {
                    return (
                        <Link key={index} 
                            //动态路由传参
                            to={`/ShortBook/detail/${item.get("id")}`}
                            >
                            <ListItem >
                                <img
                                    className="list-pic"
                                    src={item.get("imgUrl")}
                                />
                                <ListInfo >
                                    <h3 className="title">{item.get("title")}</h3>
                                    <p className="desc">{item.get("desc")}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>

                    )
                })
            }
            <LoadMore onClick={() => getMoreList(articlePage)}>更多文字</LoadMore>
        </div>
    )
})