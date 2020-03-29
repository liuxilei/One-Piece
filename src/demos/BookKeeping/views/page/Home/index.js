import React, { memo } from "react";
import { Header, Content } from "./components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { 
    setCurrentDate, 
    deleteRecordItem,
    setEditRecordItem, 
} from "../../../actions";

const BookKeeping = memo((props) => {
    const {
        setCurrentDate,
        currentDate,
        bookKeeping,
        deleteRecordItem,
        setEditRecordItem,
    } = props;
    return (
        <div>
            <Header 
                currentDate={currentDate}
                setCurrentDate={setCurrentDate}
                bookKeeping={bookKeeping}
                />
            <Content 
                currentDate={currentDate}
                bookKeeping={bookKeeping}
                deleteRecordItem={deleteRecordItem}
                setEditRecordItem={setEditRecordItem}
            />
        </div>
    )
});

const mapStateToProps = ({ BookKeeping }) => ({
    currentDate: BookKeeping.get("currentDate"),
    bookKeeping: BookKeeping.get("bookKeeping"),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(({
    setCurrentDate,
    deleteRecordItem,
    setEditRecordItem,
}), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BookKeeping);