import useTrailers from "../hooks/useTrailers";

interface Props {
    productId: number;
}

export const ProductTrailer = ({productId}: Props) => {

    const {data, error, isLoading} = useTrailers(productId);
    if (isLoading) return null;
    if (error) throw error;

    const first = data?.results[0];

  return (
    <video src={first?.data[480]} poster={first?.preview} controls></video>
  )
}
