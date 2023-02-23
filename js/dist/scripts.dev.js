"use strict";

$(document).ready(function () {
  var uri = "http://localhost/treedff/web/";
  var html_elements = document.querySelectorAll(".node-count-up-number");
  iterate(html_elements);
  /* functions ****************************************************/

  function iterate(html_elements) {
    var i, regex1, id, paragraph_fields;
    return regeneratorRuntime.async(function iterate$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            i = 0;

          case 2:
            if (!(i < html_elements.length)) {
              _context.next = 16;
              break;
            }

            regex1 = /node-count-up-number-/i;
            console.log(html_elements[i].id);
            id = html_elements[i].id.replace(regex1, "");
            console.log("node-count-up-number-" + id);
            _context.next = 9;
            return regeneratorRuntime.awrap(get_paragraph_data(id));

          case 9:
            paragraph_fields = _context.sent;
            console.log("--- Pargraph fields ---");
            console.log(paragraph_fields);
            $("#node-count-up-number-" + id).text(paragraph_fields[1]);
            i++;
            _context.next = 2;
            break;

          case 16:
            _context.next = 20;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](0);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 18]]);
  }

  function get_paragraph_data(id) {
    var node, targetId, paragraph, paragraph_data;
    return regeneratorRuntime.async(function get_paragraph_data$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(get_node(id));

          case 3:
            node = _context2.sent;
            console.log("REST Request node id: " + id);
            console.log(node);
            targetId = node.field_count_up_data[0].target_id;
            console.log(targetId);
            _context2.next = 10;
            return regeneratorRuntime.awrap(get_paragraph(targetId));

          case 10:
            paragraph = _context2.sent;
            console.log(paragraph);
            paragraph_data = [];
            paragraph_data.push(paragraph.field_label[0].value);
            paragraph_data.push(paragraph.field_number[0].value);
            console.log(data);
            _context2.next = 20;
            break;

          case 18:
            _context2.prev = 18;
            _context2.t0 = _context2["catch"](0);

          case 20:
            return _context2.abrupt("return", paragraph_data);

          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 18]]);
  }

  function get_node(id) {
    var response, nodeData;
    return regeneratorRuntime.async(function get_node$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return regeneratorRuntime.awrap(fetch(uri + "node/" + id + "?_format=json"));

          case 3:
            response = _context3.sent;
            _context3.next = 6;
            return regeneratorRuntime.awrap(response.json());

          case 6:
            nodeData = _context3.sent;
            _context3.next = 11;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);

          case 11:
            return _context3.abrupt("return", nodeData);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 9]]);
  }

  function get_paragraph(targetId) {
    var response, paragraphData;
    return regeneratorRuntime.async(function get_paragraph$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return regeneratorRuntime.awrap(fetch(uri + "entity/paragraph/" + targetId + "?_format=json"));

          case 3:
            response = _context4.sent;
            _context4.next = 6;
            return regeneratorRuntime.awrap(response.json());

          case 6:
            paragraphData = _context4.sent;
            _context4.next = 11;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](0);

          case 11:
            return _context4.abrupt("return", paragraphData);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 9]]);
  }
});