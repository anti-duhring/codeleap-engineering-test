import { TPost } from "@/services/api/post";
import FormItem from "../Form/FormItem";
import Modal from "../Modal"
import { useState, useEffect } from "react";
import { ActionType, actionTypeEnum } from ".";

type Props = {
    selectedPostData: TPost | null
    handlePostDataChange: (params: any) => void;
    onConfirm: () => void;
    onCancel: () => void;
    actionType: ActionType;
}

const DeleteAndEditModals = (props: Props) => {
    const [showModal, setShowModal] =  useState(false)

    const isTitleOrContentEmpty = !props.selectedPostData?.title || !props.selectedPostData?.content

    const toggleModal = () => setShowModal(!showModal)

    useEffect(() => {
        if(!props.selectedPostData) return

        toggleModal()

    },[props.selectedPostData?.id])

    const defaultModalProps = {
        toggleModal,
        onConfirm: props.onConfirm,
        onCancel: props.onCancel,
        primaryButtonDisabled: isTitleOrContentEmpty,
        showButton: true
    }

    return (
        <>
        <Modal
            title='Are you sure you want to delete this item?'
            primaryButtonTitle='Delete'
            primaryButtonType='error'
            showModal={props.actionType == actionTypeEnum.delete ? showModal : false}
            {...defaultModalProps}
        />
        <Modal
            title='Edit item'
            primaryButtonTitle='Save'
            primaryButtonType='success'
            showModal={props.actionType == actionTypeEnum.edit ? showModal : false}
            {...defaultModalProps}
        >
            <FormItem
                label='Title'
                type='text'
                value={props.selectedPostData?.title}
                onChangeValue={props.handlePostDataChange}
            />
            <FormItem
                label='Content'
                type='textarea'
                value={props.selectedPostData?.content}
                onChangeValue={props.handlePostDataChange}
            />
        </Modal>
        </>
    )
}

export default DeleteAndEditModals