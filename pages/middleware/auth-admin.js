export default async function(){
    let user = $auth.$storage.getUniversal('userId');

    if (user == 0){
        
    }else{
        store,dispatch('snackbat/setSnackbar',{color: 'error',text: 'Debe de ser administrador'})
        // redirect('/login')
    }redirect
}