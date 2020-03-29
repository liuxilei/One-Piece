import styled from "styled-components";

export const EditWrapper = styled.div`
    width: 610px;
    margin: 45px auto 0px;
`;

export const Tabs = styled.div`
    border-bottom: 2px solid #dddafa;
    display: flex;
    justify-content: space-between;
    div {
        width: 295px;
        height: 33px;
        line-height: 33px;
        border-radius: 4px;
        border: 2px solid #dddafa;
        text-align: center;
        border-bottom: none;
        position: relative;
        top: 2px;
        cursor: pointer;
        font-size: 16px;
        cursor: pointer;
        &.select {
            background: #6752f1;
            border: 2px solid #6752f1;
            text-align: center;
            color: #fff;
        }
    }
`;

export const TypeWays = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 25px;
`;

export const TypeWaysItem = styled.div`
    width: 50px;
    margin-right: 37px;
    margin-bottom: 15px;
    cursor: pointer;
    .icon {
        width: 55px;
        height: 55px;
        line-height: 55px;
        border-radius: 50%;
        text-align: center;
        border: 2px solid #788895;
        color: #788895;
        i {
            font-size: 25px;
        }
        &.select {
            color: #fff;
            background: #c7c2f8;
            border: none;
        }
    }
    .name {
        width: 55px;
        text-align: center;
        margin-top: 10px;
        font-size: 15px;
    }
`;

export const FormLayout = styled.div`
    margin-top: 40px;
    display: flex;
    .attribute {
        flex: 1;
    }
    .input {
        flex: 7;
        input {
            position: relative;
            top: -2px;
            width: 475px;
            border: 1px solid #788895;
            height: 30px;
            line-height: 30px;
            border-radius: 4px;
            &::placeholder {
                color: #788895;
            }
            &.normal {
                text-indent: 10px;
            }
        }
    }
`;

export const ButtonWrapper = styled.div`
    margin-top: 40px;
`;

export const OperateButton = styled.div`
    width: 60px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #6752f1;
    border-radius: 4px;
    background: #fff;
    margin-right: 25px;
    display: inline-block;
    border: 1px solid #6752f1;
    cursor: pointer;
    &.primary {
        background: #6752f1;
        color: #fff;
    }
`;