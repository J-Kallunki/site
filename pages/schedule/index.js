import React, { Fragment } from "react";
import { Markdown, connect } from "components";

const Schedule = ({ page = {} }) => (
  <Fragment>
    <section className="intro intro_schedule">
      <div className="intro--main">
        <Markdown source={page.intro} />
      </div>
      <aside className="intro--aside" />
    </section>
    <div className="grid--5col" id="schedule">
      <Markdown source={page.main} />
    </div>
  </Fragment>
);

export default connect(`
{
  page(id: "schedule") {
    intro, main
  }
}
`)(Schedule);
