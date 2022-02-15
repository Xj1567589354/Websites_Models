$(function()
{
    $(".main ul li").hover(
function()
{
    $(this).find("ul").fadeIn(1000);
},
function()
{
    $(this).find("ul").fadeOut(1000);
}
)
});