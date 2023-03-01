$(document).ready(function(){

    let element = $("#board");
    let getCanvas;
     
        $("#btn-Preview-Image").on('click', function () {
            $("#previewImage").empty();
             html2canvas(element, {
             onrendered: function (canvas) {
                    $("#previewImage").append(canvas);
                    getCanvas = canvas;
                 }
             });
        });
    
        $("#btn-Convert-Html2Image").on('click', function () {
        let imgageData = getCanvas.toDataURL("image/png");
        let newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
        $("#btn-Convert-Html2Image").attr("download", "tierList.png").attr("href", newData);
        });
    
    }
);