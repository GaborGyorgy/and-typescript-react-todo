export default interface IDeleteTaskModalProps {
  deleteConfirmedHandler: () => void;
  deleteCancelledHandler: () => void;
  isOpen: boolean;
}
