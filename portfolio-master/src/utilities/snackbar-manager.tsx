import { useSnackbar, ProviderContext , VariantType } from "notistack";

let useSnackbarRef: ProviderContext ;

export const SnackbarUtilitiesConfigurator: React.FC = ( ) => {
    useSnackbarRef = useSnackbar();
    return null;
}
// The configurator component and this helper have to share useSnackbarRef, so they
// stay in one module; that costs fast-refresh for this file only.
// eslint-disable-next-line react-refresh/only-export-components
export const SnackbarUtilities = {
    toast(msg: string, variant: VariantType = "default") {  
        useSnackbarRef.enqueueSnackbar(msg, {variant: variant, preventDuplicate: true});
    }, 
    success(msg: string)  {
        this.toast(msg, "success");
    },
    error(msg: string)  {
        this.toast(msg, "error");
    }, 
    info(msg: string)  {
        this.toast(msg, "info");
    },   
    warning(msg: string)  {
        this.toast(msg, "warning");
    }, 
}

