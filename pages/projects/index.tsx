// ** Hooks
import useHttp from "hooks/use-http";
// ** Partials
import PageHeader from "components/partials/PageHeader";
// ** Components
import Link from "next/link";
import { Button, Col, Row } from "reactstrap";
import GalleryCard from "components/widgets/GalleryCard";
import PlusIcon from "components/SVG/Plus.svg";
// ** Services
import { fetchProjects } from "services/ProjectService";

export default function Projects() {
  const { data: projects } = useHttp(fetchProjects, {}, []);

  return (
    <Row>
      <PageHeader>
        <Link href={"/projects/form"}>
          <Button color="primary">
            <PlusIcon />
            New Project
          </Button>
        </Link>
      </PageHeader>
      {projects.map((project, index) => (
        <Col sm={3} key={index}>
          <GalleryCard
            key={index}
            title={project.title}
            subtitle={project.desc}
            href={`/projects/${project.slug}`}
          />
        </Col>
      ))}
    </Row>
  );
}
