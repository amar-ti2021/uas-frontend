import { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../lib/store/store";
import Title from "../../lib/ui/Title/Title";
import { updateProvince } from "../../lib/slices/provincesSlice";
import Image from "../../assets/undraw_conceptual_idea_xw7k.svg";
import StyledUpdateForm from "./StyledUpdateForm";
interface Province {
  type: string;
  name: string;
  numbers: {
    [key: string]: number;
  };
}

const UpdateForm = () => {
  const provinces = useSelector((store: RootState) => store.provinces.province);

  const dispatch = useDispatch();
  const [provinceId, setProvinceId] = useState<number>(0);
  const [status, setStatus] = useState<string>("confirmed");
  const [count, setCount] = useState<number>(1);

  const [provinceIdError, setProvinceIdError] = useState<boolean>(false);
  const [statusError, setStatusError] = useState<boolean>(false);
  const [countError, setCountError] = useState<boolean>(false);

  const validateForm = (): boolean => {
    let isValid = true;

    if (provinceId < 0) {
      setProvinceIdError(true);
      isValid = false;
    } else {
      setProvinceIdError(false);
    }

    if (status === "") {
      setStatusError(true);
      isValid = false;
    } else {
      setStatusError(false);
    }

    if (count <= 0) {
      setCountError(true);
      isValid = false;
    } else {
      setCountError(false);
    }

    return isValid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      const updatedProvinces = provinces.map((province: Province, index) => {
        if (index === provinceId) {
          const updatedNumbers = {
            ...province.numbers,
            [status]: province.numbers[status] + count,
          };

          return {
            ...province,
            numbers: updatedNumbers,
          };
        }
        return province;
      });

      dispatch(updateProvince(updatedProvinces));

      setProvinceId(0);
      setStatus("confirmed");
      setCount(1);
    }
  };

  const handleProvinceChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setProvinceId(Number(e.target.value));
  };

  const handleStatusChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  const handleCountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCount(Number(e.target.value));
  };

  return (
    <StyledUpdateForm>
      <img src={Image} />
      <form onSubmit={handleSubmit}>
        <Title>Covid Form</Title>
        <div>
          <label htmlFor="provinces">Provinsi</label>
          <select
            id="province"
            value={provinceId}
            onChange={handleProvinceChange}
          >
            {provinces.map((item, id) => (
              <option key={id} value={id}>
                {item.name}
              </option>
            ))}
          </select>
          {provinceIdError && <span>Tolong Pilih Provinsinya ya!</span>}
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <select id="status" value={status} onChange={handleStatusChange}>
            <option value="confirmed">Terkonfirmasi</option>
            <option value="recovered">Sembuh</option>
            <option value="treatment">Dirawat</option>
            <option value="death">Meninggal</option>
          </select>
          {statusError && <span>Tolong Pilih Statusnya ya!</span>}
        </div>
        <div>
          <label htmlFor="count">Jumlah</label>
          <input
            type="number"
            min={1}
            value={count}
            id="count"
            onChange={handleCountChange}
          />
          {countError && <span>Tolong Isi jumlah kasusnya ya!</span>}
        </div>
        <button type="submit">submit</button>
      </form>
    </StyledUpdateForm>
  );
};

export default UpdateForm;
