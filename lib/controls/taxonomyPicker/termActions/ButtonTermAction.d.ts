/// <reference types="react" />
import * as React from 'react';
import { IConcreteTermActionProps } from './ITermsActions';
export default class ButtonTermAction extends React.Component<IConcreteTermActionProps> {
    /**
     * componentWillMount lifecycle hook
     */
    componentWillMount(): void;
    /**
     * Prepares the command bar button
     */
    private prepareCommandBarButton;
    /**
     * Gets the action button styling
     */
    private getTermActionActionButtonStyle;
    /**
     * Check if there are action to immediatly invoke
     */
    private checkForImmediateInvocations();
    /**
     * On action execution
     */
    private onActionExecute;
    /**
     * Default React render method
     */
    render(): React.ReactElement<IConcreteTermActionProps>;
}
