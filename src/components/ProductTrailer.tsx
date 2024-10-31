import useTrailers from "../hooks/useTrailers";

interface Props {
    productId: number;
}

export const ProductTrailer = ({productId}: Props) => {

    const {data, error, isLoading} = useTrailers(productId);
    if (isLoading) return null;
    if (error) throw error;

    const first = data;

  return (
    <video src={first?.data} poster={first?.preview} controls></video>
    // [480]
  )
}
