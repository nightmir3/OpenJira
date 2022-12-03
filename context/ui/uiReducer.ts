import { UIState } from './'

type UIAction =
  | { type: '[UI] - Open Sidebar' }
  | { type: '[UI] - Close Sidebar' }
  | { type: '[UI] - Set isAddingEntry'; payload: boolean }
  | { type: '[UI] - Start Dragging' }
  | { type: '[UI] - End Dragging' }

export const uiReducer = (state: UIState, action: UIAction): UIState => {
  switch (action.type) {
    case '[UI] - Open Sidebar':
      return {
        ...state,
        isSidebarOpen: true
      }
    case '[UI] - Close Sidebar':
      return {
        ...state,
        isSidebarOpen: false
      }
    case '[UI] - Set isAddingEntry':
      return {
        ...state,
        isAddingEntry: action.payload
      }
    case '[UI] - Start Dragging':
      return {
        ...state,
        isDragging: true
      }
    case '[UI] - End Dragging':
      return {
        ...state,
        isDragging: false
      }
    default:
      return state
  }
}
