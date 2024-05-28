// import node module libraries
import Link from 'next/link';
import { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// import widget/custom components
import { StatRightTopIcon } from '@/widgets';

// import sub components
import { ActiveProjects, TasksPerformance, Teams } from '@/sub-components';

// import required data files
import ProjectsStatsData from '@/data/dashboard/ProjectsStatsData';

const Home = () => {
  return (
    <Fragment>
      <div className="bg-primary pb-21 pt-10"></div>
      <Container fluid className="mt-n22 px-6">
        <Row>
          <Col lg={12} md={12} xs={12}>
            {/* Page header */}
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="mb-lg-0 mb-2">
                  <h3 className="mb-0  text-white">Projects</h3>
                </div>
                <div>
                  <Link href="#" className="btn btn-white">
                    Create New Project
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          {ProjectsStatsData.map((item, index) => {
            return (
              <Col xl={3} lg={6} md={12} xs={12} className="mt-6" key={index}>
                <StatRightTopIcon info={item} />
              </Col>
            );
          })}
        </Row>

        {/* Active Projects  */}
        <ActiveProjects />

        <Row className="my-6">
          <Col xl={4} lg={12} md={12} xs={12} className="mb-xl-0 mb-6">
            {/* Tasks Performance  */}
            <TasksPerformance />
          </Col>
          {/* card  */}
          <Col xl={8} lg={12} md={12} xs={12}>
            {/* Teams  */}
            <Teams />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default Home;
