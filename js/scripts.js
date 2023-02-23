(function ($) {
  //$(document).ready(function () {
  const uri = get_domain();
  /***************************************************/
  let html_elements = document.querySelectorAll(".node-count-up-number");
  iterate_elements(html_elements);

  /* functions ****************************************************/
  /* Domain configuration ****************************/
  /* Feel free to set your on domain conf ***********/
  function get_domain() {
    let domain = window.location.hostname;
    let projectDirectory = "/treedff/web/"; // "" - no spaces for projects in root directory
    let http = "http://"; // "https://" - for SSL sites
    console.log("Domain: " + http + domain + projectDirectory);
    let url = http + domain + projectDirectory;
    return url;
  }

  async function iterate_elements(html_elements) {
    try {
      var i = 0;
      while (i < html_elements.length) {
        const regex1 = /node-count-up-number-/i;
        console.log(html_elements[i].id);
        let id = html_elements[i].id.replace(regex1, "");
        console.log("node-count-up-number-" + id);
        var paragraph_fields = await get_paragraph_data(id);

        console.log("--- Pargraph fields ---");
        console.log(paragraph_fields);
        let c = new CountUp(
          "node-count-up-number-" + id,
          0,
          paragraph_fields[1]
        );
        c.start();
        i++;
      }
    } catch (error) {}
  }

  async function get_paragraph_data(id) {
    try {
      var node = await get_node(id);
      console.log("REST Request node id: " + id);
      console.log(node);

      var targetId = node.field_count_up_data[0].target_id;
      console.log(targetId);
      var paragraph = await get_paragraph(targetId);
      console.log(paragraph);
      var paragraph_data = [];
      paragraph_data.push(paragraph.field_label[0].value);
      paragraph_data.push(paragraph.field_number[0].value);
      console.log(data);
    } catch (error) {}
    return paragraph_data;
  }

  async function get_node(id) {
    try {
      let response = await fetch(uri + "node/" + id + "?_format=json");
      var nodeData = await response.json();
    } catch (error) {}
    return nodeData;
  }

  async function get_paragraph(targetId) {
    try {
      let response = await fetch(
        uri + "entity/paragraph/" + targetId + "?_format=json"
      );
      var paragraphData = await response.json();
    } catch (error) {}
    return paragraphData;
  }
  //});
})(jQuery);
