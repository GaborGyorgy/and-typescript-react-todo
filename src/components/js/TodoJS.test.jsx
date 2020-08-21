import React from "react";
import { act } from "react-dom/test-utils";
import { render, fireEvent } from "@testing-library/react";
import TodoJS from "./TodoJS";
import { getLocalStorageItem } from "./localStorageHelper";

jest.mock("./localStorageHelper");

test("Should add a task", async () => {
  getLocalStorageItem.mockImplementation(() => Promise.resolve([]));
  let component;
  await act(async () => {
    component = await render(<TodoJS />);
  });

  const addTaskInput = component.getByTestId("add-task-input");

  act(() => {
    fireEvent.change(addTaskInput, { target: { value: "Gabor was here" } });
  });

  const addTaskButton = component.getByTestId("add-task-button");

  await act(async () => {
    await fireEvent.click(addTaskButton);
  });

  const taskList = component.queryAllByTestId("task-list-item");
  expect(taskList.length).toBe(1);

  const taskLabel = component.getByText("Gabor was here");

  expect(taskLabel).toBeTruthy();
});

test("Should check a task", async () => {
  getLocalStorageItem.mockImplementation(() => Promise.resolve([]));
  let component;
  await act(async () => {
    component = await render(<TodoJS />);
  });

  const addTaskInput = component.getByTestId("add-task-input");

  act(() => {
    fireEvent.change(addTaskInput, { target: { value: "Gabor was here" } });
  });

  const addTaskButton = component.getByTestId("add-task-button");

  await act(async () => {
    await fireEvent.click(addTaskButton);
  });

  const taskList = component.queryAllByTestId("task-list-item");
  expect(taskList.length).toBe(1);

  const taskCheckBox = component.getByTestId("check-task-button");

  expect(taskCheckBox.checked).toBe(false);

  await act(async () => {
    fireEvent.click(taskCheckBox);
  });

  expect(taskCheckBox.checked).toBe(true);
});

test("Should delete a task", async () => {
  getLocalStorageItem.mockImplementation(() => Promise.resolve([]));
  let component;
  await act(async () => {
    component = await render(<TodoJS />);
  });

  const addTaskInput = component.getByTestId("add-task-input");

  act(() => {
    fireEvent.change(addTaskInput, { target: { value: "Gabor was here" } });
  });

  const addTaskButton = component.getByTestId("add-task-button");

  await act(async () => {
    await fireEvent.click(addTaskButton);
  });

  const taskList = component.queryAllByTestId("task-list-item");
  expect(taskList.length).toBe(1);

  const deleteButton = component.getByTestId("task-item-delete-button");

  act(() => {
    fireEvent.click(deleteButton);
  });

  const confirmDeleteButton = component.getByTestId("delete-task-button");

  await act(async () => {
    await fireEvent.click(confirmDeleteButton);
  });

  const taskList2 = component.queryAllByTestId("task-list-item");
  expect(taskList2.length).toBe(0);
});
