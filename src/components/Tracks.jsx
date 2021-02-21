import Track from "./Track";
import React from "react";
import { Row, Col } from "react-bootstrap";
import { Component } from "react";

class Tracks extends Component {
  state = {
    Tracks: [],
    fetching: true,
  };

  fetchTracks = async () => {
    const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=";
    const headers = new Headers({
      "x-rapidapi-key": "8085f2770emshc1cb3109961c5b5p130d8djsn976ae5a2d25d",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    });

    try {
      const response = await fetch(url + this.props.artistName, {
        method: "GET",
        headers,
      });
      const result = await response.json();
      const Tracks = result.data;
      console.log(Tracks);
      this.setState({ Tracks: Tracks, fetching: false });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    this.fetchTracks();
  };

  render() {
    return (
      <div style={{ minHeight: "80vh" }}>
        <h2 className="pl-3 text-white">{this.props.artistName}</h2>
        <div className="mx-3">
          <Row xs={1} sm={2} md={3} lg={4} xl={6}>
            {this.state.Tracks.map((track, idx) => (
              <Col key={idx}>
                <Track
                  key={track.id}
                  img={track.album.cover_medium}
                  title={track.title_short}
                  artistName={track.artist.name}
                  id={track.album.id}
                  preview={track.preview}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
}

export default Tracks;
