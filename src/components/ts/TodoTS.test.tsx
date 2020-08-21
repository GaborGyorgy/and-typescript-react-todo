import React, { ReactElement } from "react";
import { act } from "react-dom/test-utils";
import { render, fireEvent, RenderResult, wait } from "@testing-library/react";
import TodoTS from "./TodoTS";
import { getLocalStorageItem } from "./localStorageHelper";

jest.mock("./localStorageHelper");

test("Should add a task", async () => {
  (getLocalStorageItem as jest.Mock).mockImplementation(() =>
    Promise.resolve([])
  );

  await act(async () => {
    const component: RenderResult = await render(
      <TodoTS noTaskText="No Task Text" headerText="Header text" />
    );

    const addTaskInput = component.getByTestId("add-task-input");

    await act(async () => {
      await fireEvent.change(addTaskInput, {
        target: { value: "Gabor was here" },
      });
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
});

test("Should check a task", async () => {
  (getLocalStorageItem as jest.Mock).mockImplementation(() =>
    Promise.resolve([])
  );

  await act(async () => {
    const component: RenderResult = await render(
      <TodoTS noTaskText="No Task Text" headerText="Header text" />
    );

    const addTaskInput = component.getByTestId("add-task-input");

    await act(async () => {
      await fireEvent.change(addTaskInput, {
        target: { value: "Gabor was here" },
      });
    });

    const addTaskButton = component.getByTestId("add-task-button");

    await act(async () => {
      await fireEvent.click(addTaskButton);
    });

    const taskList = component.queryAllByTestId("task-list-item");
    expect(taskList.length).toBe(1);

    const taskCheckBox = component.getByTestId("check-task-button");

    expect((taskCheckBox as HTMLInputElement).checked).toBe(false);

    await act(async () => {
      fireEvent.click(taskCheckBox);
    });

    expect((taskCheckBox as HTMLInputElement).checked).toBe(true);
  });
});

test("Should delete a task", async () => {
  (getLocalStorageItem as jest.Mock).mockImplementation(() =>
    Promise.resolve([])
  );

  await act(async () => {
    const component: RenderResult = await render(
      <TodoTS noTaskText="No Task Text" headerText="Header text" />
    );

    const addTaskInput = component.getByTestId("add-task-input");

    await act(async () => {
      await fireEvent.change(addTaskInput, {
        target: { value: "Gabor was here" },
      });
    });

    const addTaskButton = component.getByTestId("add-task-button");

    await act(async () => {
      await fireEvent.click(addTaskButton);
    });

    const taskList = component.queryAllByTestId("task-list-item");
    expect(taskList.length).toBe(1);

    const deleteButton = component.getByTestId("task-item-delete-button");

    await act(async () => {
      await fireEvent.click(deleteButton);
    });

    const confirmDeleteButton = component.getByTestId("delete-task-button");

    await act(async () => {
      await fireEvent.click(confirmDeleteButton);
    });

    const taskList2 = component.queryAllByTestId("task-list-item");
    expect(taskList2.length).toBe(0);
  });
});
