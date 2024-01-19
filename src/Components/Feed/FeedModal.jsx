import React from "react";
import styles from "./FeedModal.module.css";
import useFetch from './../../Hooks/useFetch';
import { PHOTOS_GET } from "../../api";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import PhotoContent from "../Photo/PhotoContent";

const FeedModal = ({photo}) => {
  const {data, error, loading, request} = useFetch();

  React.useEffect(()=> {
    const {url, options} = PHOTOS_GET(photo.id);
    const foto = request(url, options);
  }, [photo, request]);

  return (
    <div className={styles.modal}>
      {error && <Error error={error}/>}
      {loading && <Loading/>}
      {data && <PhotoContent data={data}/>}
    </div>
  );
};

export default FeedModal;
