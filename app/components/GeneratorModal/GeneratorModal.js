import React from 'react'
import classNames from 'classnames'

// components
import Icon from 'components/Icon/Icon'
import PopupCover from 'components/PopupCover/PopupCover'

const GeneratorModal = ({ children, className }) => (
    <PopupCover>
        <div className={classNames('box-generator-modal', className)}>
            {children}
        </div>
    </PopupCover>
)

GeneratorModal.CloseButton = ({ onClick, theme }) => (
    <Icon name="REMOVE" onClick={onClick} className={classNames('box-generator-modal__close', theme)}/>
)

export default GeneratorModal