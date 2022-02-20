//document start
$(()=>{  
    setFooter();

})

setFooter = ()=> {
    $($("footer")[0]).text('Copyright &#169; Basic_Template ' + new Date().getFullYear());
}

