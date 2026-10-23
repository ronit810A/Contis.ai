
import { useState } from "react";
import { IoChevronDown, IoSearchOutline } from "react-icons/io5";

import "@fortawesome/fontawesome-free/css/all.min.css";

import { blog01, blog02, blog03, blog04, blog05, blog06, blog07 } from "../image";


function BlogTeam() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState({});
    const dropdowns = [
        {
            name: "Categories",
            options: ["Categories", "Categories 1", "Categories 2", "Categories 3"],
        },
        {
            name: "Author",
            options: ["Author", "Author 1", "Author 2", "Author 3"],
        },
        {
            name: "Tags",
            options: ["Tags", "Tags 1", "Tags 2", "Tags 3"],
        },
    ];

    const selectOption = (dropdownName, option) => {
        setSelectedOptions((currentOptions) => ({
            ...currentOptions,
            [dropdownName]: option,
        }));
        setOpenDropdown(null);
    };

    return (
        <section className="blog-team-section">
            <div className="blog-team-main">
                <div className="container">
                    <div className="blog-team-container">

                        <div className="row d-flex flex-wrap justify-content-between mb-4">

                            <div className="col-lg-2">
                                <form action="" className="blog-team-search">
                                    <input type="text" placeholder="Search..."></input>
                                    <button className="blog-search-icon">
                                        <IoSearchOutline />
                                    </button>
                                </form>
                            </div>

                            <div className="col-lg-8">
                                <div className="blog-team-categories d-flex flex-wrap justify-content-end">
                                    <p>Showing 1-25 of 56 results</p>
                                    <ul className="dropdown blog-dropdown-list">
                                        {dropdowns.map(({ name, options }) => {
                                            const isOpen = openDropdown === name;
                                            const selectedOption = selectedOptions[name] || name;

                                            return (
                                                <li className="blog-dropdown-item" key={name}>
                                                    <button
                                                        type="button"
                                                        className="blog-dropdown-button"
                                                        aria-expanded={isOpen}
                                                        aria-label={`Select ${name}`}
                                                        onClick={() =>
                                                            setOpenDropdown(isOpen ? null : name)
                                                        }
                                                    >
                                                        {selectedOption}
                                                        <IoChevronDown
                                                            className={
                                                                isOpen
                                                                    ? "blog-dropdown-arrow up"
                                                                    : "blog-dropdown-arrow"
                                                            }
                                                            aria-hidden="true"
                                                        />
                                                    </button>
                                                    {isOpen && (
                                                        <ul className="blog-dropdown-menu">
                                                            {options.map((option) => (
                                                                <li key={option}>
                                                                    <button
                                                                        type="button"
                                                                        onClick={() =>
                                                                            selectOption(name, option)
                                                                        }
                                                                    >
                                                                        {option}
                                                                    </button>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-md-4">
                                <div className="blog-team-box">
                                    <div className="blog-team-img">
                                        <img src={blog01} alt="" />
                                    </div>
                                    <div className="blog-team-text">
                                        <ul class="d-flex flex-wrap">
                                            <li>Sep 26, 2021</li>
                                            <li>9 min</li>
                                            <li>Admin</li>
                                        </ul>
                                        <a className="blog-team-heading">
                                            Ensuring your data security: Met.ai is now SOC 2 type || Compliant
                                        </a>
                                        <p>
                                            <a className="blog-team-link">Case Study</a>
                                            <a className="blog-team-link">Perspectives</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="blog-team-box">
                                    <div className="blog-team-img">
                                        <img src={blog02} alt="" />
                                    </div>
                                    <div className="blog-team-text">
                                        <ul class="d-flex flex-wrap">
                                            <li>Sep 26, 2021</li>
                                            <li>9 min</li>
                                            <li>Admin</li>
                                        </ul>
                                        <a className="blog-team-heading">
                                            Ensuring your data security: Met.ai is now SOC 2 type || Compliant
                                        </a>
                                        <p>
                                            <a className="blog-team-link">Case Study</a>
                                            <a className="blog-team-link">Perspectives</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="blog-team-box">
                                    <div className="blog-team-img">
                                        <img src={blog03} alt="" />
                                    </div>
                                    <div className="blog-team-text">
                                        <ul class="d-flex flex-wrap">
                                            <li>Sep 26, 2021</li>
                                            <li>9 min</li>
                                            <li>Admin</li>
                                        </ul>
                                        <a className="blog-team-heading">
                                            Ensuring your data security: Met.ai is now SOC 2 type || Compliant
                                        </a>
                                        <p>
                                            <a className="blog-team-link">Case Study</a>
                                            <a className="blog-team-link">Perspectives</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="blog-team-box">
                                    <div className="blog-team-img">
                                        <img src={blog04} alt="" />
                                    </div>
                                    <div className="blog-team-text">
                                        <ul class="d-flex flex-wrap">
                                            <li>Sep 26, 2021</li>
                                            <li>9 min</li>
                                            <li>Admin</li>
                                        </ul>
                                        <a className="blog-team-heading">
                                            Ensuring your data security: Met.ai is now SOC 2 type || Compliant
                                        </a>
                                        <p>
                                            <a className="blog-team-link">Case Study</a>
                                            <a className="blog-team-link">Perspectives</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="blog-team-box">
                                    <div className="blog-team-img">
                                        <img src={blog05} alt="" />
                                    </div>
                                    <div className="blog-team-text">
                                        <ul class="d-flex flex-wrap">
                                            <li>Sep 26, 2021</li>
                                            <li>9 min</li>
                                            <li>Admin</li>
                                        </ul>
                                        <a className="blog-team-heading">
                                            Ensuring your data security: Met.ai is now SOC 2 type || Compliant
                                        </a>
                                        <p>
                                            <a className="blog-team-link">Case Study</a>
                                            <a className="blog-team-link">Perspectives</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="blog-team-box">
                                    <div className="blog-team-img">
                                        <img src={blog06} alt="" />
                                    </div>
                                    <div className="blog-team-text">
                                        <ul class="d-flex flex-wrap">
                                            <li>Sep 26, 2021</li>
                                            <li>9 min</li>
                                            <li>Admin</li>
                                        </ul>
                                        <a className="blog-team-heading">
                                            Ensuring your data security: Met.ai is now SOC 2 type || Compliant
                                        </a>
                                        <p>
                                            <a className="blog-team-link">Case Study</a>
                                            <a className="blog-team-link">Perspectives</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="blog-team-box">
                                    <div className="blog-team-img">
                                        <img src={blog07} alt="" />
                                    </div>
                                    <div className="blog-team-text">
                                        <ul class="d-flex flex-wrap">
                                            <li>Sep 26, 2021</li>
                                            <li>9 min</li>
                                            <li>Admin</li>
                                        </ul>
                                        <a className="blog-team-heading">
                                            Ensuring your data security: Met.ai is now SOC 2 type || Compliant
                                        </a>
                                        <p>
                                            <a className="blog-team-link">Case Study</a>
                                            <a className="blog-team-link">Perspectives</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="blog-team-box">
                                    <div className="blog-team-img">
                                        <img src={blog01} alt="" />
                                    </div>
                                    <div className="blog-team-text">
                                        <ul class="d-flex flex-wrap">
                                            <li>Sep 26, 2021</li>
                                            <li>9 min</li>
                                            <li>Admin</li>
                                        </ul>
                                        <a className="blog-team-heading">
                                            Ensuring your data security: Met.ai is now SOC 2 type || Compliant
                                        </a>
                                        <p>
                                            <a className="blog-team-link">Case Study</a>
                                            <a className="blog-team-link">Perspectives</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="blog-team-box">
                                    <div className="blog-team-img">
                                        <img src={blog02} alt="" />
                                    </div>
                                    <div className="blog-team-text">
                                        <ul class="d-flex flex-wrap">
                                            <li>Sep 26, 2021</li>
                                            <li>9 min</li>
                                            <li>Admin</li>
                                        </ul>
                                        <a className="blog-team-heading">
                                            Ensuring your data security: Met.ai is now SOC 2 type || Compliant
                                        </a>
                                        <p>
                                            <a className="blog-team-link">Case Study</a>
                                            <a className="blog-team-link">Perspectives</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogTeam;