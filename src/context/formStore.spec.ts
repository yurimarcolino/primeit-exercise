import { useFormStore, FormActions } from "./formStore";

describe("useFormStore", () => {
  let store: {
    actions: FormActions;
  };

  beforeEach(() => {
    store = useFormStore.getState();
    useFormStore.setState({ state: { form: [] } });
  });

  afterEach(() => {
    useFormStore.setState(store);
  });

  it("should initialize with an empty form array", () => {
    const { state } = useFormStore.getState();
    expect(state.form).toEqual([]);
  });

  it("should update the form state correctly", () => {
    const formValues = [
      { startDate: "2023-05-01", endDate: "2023-05-31", valueType: "Type A", amount: "100" },
      { startDate: "2023-06-01", endDate: "2023-06-30", valueType: "Type B", amount: "200" },
    ];

    store.actions.setForm(formValues);

    const { state } = useFormStore.getState();
    expect(state.form).toEqual(formValues);
  });
});
