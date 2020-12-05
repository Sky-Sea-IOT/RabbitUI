/**
 * @param {string} type
 * @return {string}
 */
function getIconTypes(type) {
    const iconTypes = {
        info: 'ios-information-circle',
        success: 'ios-checkmark-circle',
        warning: 'ios-alert',
        error: 'ios-close-circle',
        infoOl: 'ios-information-circle-outline',
        successOl: 'ios-checkmark-circle-outline',
        warningOl: 'md-information-circle-outline',
        errorOl: 'ios-close-circle-outline',
        loadingSolid: 'loading-solid',
        loading: 'loading-solid',
        close: 'ios-close',
    };

    switch (type) {
        case 'info':
            return iconTypes.info;

        case 'success':
            return iconTypes.success;

        case 'warning':
            return iconTypes.warning;

        case 'error':
            return iconTypes.error;

        case 'info-outline':
            return iconTypes.infoOl;

        case 'success-outline':
            return iconTypes.successOl;

        case 'warning-outline':
            return iconTypes.warningOl;

        case 'error-outline':
            return iconTypes.errorOl;

        case 'loading':
            return iconTypes.loading;

        case 'close':
            return iconTypes.close;
    }
}

// export default getIconTypes;