function initViz() {
  const container = document.getElementById("vizContainer");

  const url = "https://public.tableau.com/views/Ex4_3_Scooter_Data_Draft2/ParkedScooterLocations?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link";

  const options = {
    width: "1920px",
    height: "1080px",

    onFirstInteractive: function () {
      console.log("Tableau fullscreen ready!");
    }
  };

  viz = new tableau.Viz(container, url, options);
}

window.onload = initViz;
