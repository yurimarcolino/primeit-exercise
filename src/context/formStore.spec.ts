import { useFormStore, FormActions } from "./formStore";

describe("useFormStore", () => {
  let store: {
    actions: FormActions;
  };

  beforeEach(() => {
    store = useFormStore.getState();
    useFormStore.setState({ state: { form: [], isFormFinished: false } });
  });

  afterEach(() => {
    useFormStore.setState(store);
  });

  it("should initialize the form state with an empty form array and the isFinishedForm state false", () => {
    const { state } = useFormStore.getState();
    expect(state.form).toEqual([]);
    expect(state.isFormFinished).toEqual(false);
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
  it("should update the isFormFished state correctly", () => {
    const isFinished = true;

    store.actions.setIsFormFinished(isFinished);
    const retrievedIsFinished = useFormStore.getState().state.isFormFinished;

    expect(retrievedIsFinished).toEqual(isFinished);
  });
});
