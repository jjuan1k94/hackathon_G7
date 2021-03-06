import {
  setConfiguration,
  Container,
  Visible,
  Hidden,
  Row,
  Col,
} from "react-grid-system";

setConfiguration({
  breakpoints: [425, 812, 1024, 1366, 1920],
  gutterWidth: 20,
});

export { Container, Row, Col, Visible, Hidden };
