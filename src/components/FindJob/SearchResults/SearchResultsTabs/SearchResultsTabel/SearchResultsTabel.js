import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import ScheduleIcon from "@material-ui/icons/Schedule";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

import "./SearchResultsTabel.css";

const SearchResultsTabel = ({ SearchResultsData }) => {
  //
  const NewSearchResultsData = [...SearchResultsData].splice(0, 4);

  // we will be back here to handle load more buttons,
  // to show more elements
  const handleLoadMore = () => {};
  return (
    <>
      <Table responsive>
        <tbody>
          {NewSearchResultsData.map((item, idx) => (
            <tr key={idx}>
              <td className="py-3">
                <div className="d-flex">
                  <img
                    src={item.logo}
                    alt={item.company}
                    className="results_company_logo mr-3"
                  />
                  <div>
                    <h6>{item.jobTitle}</h6>
                    <div className="text-truncate">
                      <span
                        className="pr-2 side_line"
                        style={{ color: "#4c4fd0" }}
                      >
                        {item.company}
                      </span>
                      <span className="pl-2 text-muted">{item.company}</span>
                    </div>
                  </div>
                </div>
              </td>
              <td className="py-3 text-truncate">
                <span className="text-muted" style={{ fontSize: ".8rem" }}>
                  <LocationOnIcon className="px-1" />
                  {item.jobLocation}
                </span>
              </td>
              <td className="py-3 text-truncate">
                <span className="text-muted" style={{ fontSize: ".8rem" }}>
                  <ScheduleIcon className="px-1" />
                  {item.insertTime}
                </span>
              </td>
              <td className="py-3">
                <div
                  className="text-white job_type_lable"
                  // background color depend on job tybe
                  style={
                    item.jobType === "Temporary"
                      ? { backgroundColor: "#40d39d" }
                      : item.jobType === "Full time"
                      ? { backgroundColor: "#1a6e90" }
                      : item.jobType === "Internship"
                      ? { backgroundColor: "#e45239" }
                      : item.jobType === "Part Time"
                      ? { backgroundColor: "#eac737" }
                      : item.jobType === "Freelance"
                      ? { backgroundColor: "#2fcfdb" }
                      : { backgroundColor: "#f1f2f4" }
                  }
                >
                  {item.jobType}
                </div>
              </td>
              <td className="py-3">
                <Dropdown className="function_group">
                  <Dropdown.Toggle id="dropdown-basic">
                    <MoreHorizIcon />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      <TouchAppIcon /> Apply
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <BookmarkBorderIcon />
                      Save
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex px-2 mb-2">
        <Button onClick={handleLoadMore} className="gray_btn btn-light">
          LOAD MORE LISTING
        </Button>
      </div>
    </>
  );
};

export default SearchResultsTabel;
