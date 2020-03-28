import React, { memo } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Write = memo(({ login }) => {
    if (login) {
        return (
            <div>写文章页面</div>
        )
    } else {
        return <Redirect to="/ShortBook/login" />
    }
});

const mapStateToProps = ({ ShortBook }) => ({
    login: ShortBook.get("login")
});

export default connect(mapStateToProps, null)(Write);

