import { uid } from "uid";

export const mockTasks = [
    {
    "id": uid(),
    "title": "Sample Task For Explaing The Features",
    "description": "This task consists of 10 subtasks or milestones. Marking each task as completed will advance the progress bar. If all 10 subtasks are marked as completed, the task will be marked as done. Once the task is marked as done, it will fade away. The task's priority is represented by the number of arms of the star that are colored.",
    "priority": 3,
    "status": 'toDo',
    "createdAt": "10/20/2023",
    "updatedAt": "5/31/2023",
    "deadLine": "12/30/2023",
    milestones: [
      {title: 'Subtask 1', done:'on'},
      {title: 'Subtask 2', done:'on'},
      {title: 'Subtask 3', done:'on'},
      {title: 'Subtask 4'},
      {title: 'Subtask 5'},
      {title: 'Subtask 6'},
      {title: 'Subtask 7'},
      {title: 'Subtask 8'},
      {title: 'Subtask 9'},
      {title: 'Subtask 10'},
    ]
   }, {
    "id": uid(),
    "title": "Homework: JavaScript Web App",
    "description": "Project Title: Todo List Manager Project Description: Your task is to create a Todo List Manager web application using JavaScript that incorporates all the topics covered in your recent lessons. This application will allow users to add, edit, delete, and mark tasks as completed. Additionally, users will be able to filter tasks based on their status (completed or pending).",
    "priority": 5,
    "status": 3,
    "createdAt": "10/20/2023",
    "updatedAt": "5/31/2023",
    "deadLine": "12/30/2023",
    milestones: [
      {
        title: 'Design a clean and intuitive user interface for the Todo List Manager using HTML and CSS.',
        done:'on'
      }, {
        title: 'Implement functionality to store tasks in the browsers local storage using the Local Storage API. Tasks should persist even after the browser is refreshed or closed.',
        done:'on'
      }, {
        title: 'Implement functionality to add new tasks to the list.',
        done:'on'
      }, {
        title: 'Implement functionality to edit existing tasks.',
        done:'on'
      }, {
        title: 'Implement functionality to delete tasks.',
        done:'on'
      }, {
        title: 'Implement functionality to mark tasks as completed or pending.',
        done:'on'
      }, {
        title: 'Include options to filter tasks based on their status.',
        done:'on'
      }, {
        title: 'Asynchronous Programming: Implement asynchronous operations for fetching and updating tasks using the Fetch API',
       }, {
        title: 'Implement error handling mechanisms for asynchronous operations using tryatch blocks and handling rejected promises',
       }, {
        title: 'Implement sorting functionality to arrange tasks based on priority, due date, etc.',
       }, {
        title: 'Add keyboard shortcuts for common actions (e.g., adding a new task, deleting a task).',
       }, {
        title: 'Include animations or transitions to enhance user experience.',
       },
    ]
   }, {
    "id": uid(),
    "title": "Ameliorated upward-trending workforce",
    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    "priority": 3,
    "status": 3,
    "createdAt": "10/20/2023",
    "updatedAt": "5/31/2023",
    "deadLine": "12/30/2023",
    milestones: [
      {title: 'First Step', done:'on'}, {title: 'Almost there', done:'on'},
      {title: 'Congratulations'},
    ]
  }, {
    "id": uid(),
    "title": "Triple-buffered optimizing flexibility",
    "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "priority": 3,
    "status": 2,
    "createdAt": "8/20/2023",
    "updatedAt": "6/14/2023",
    "deadLine": "3/17/2023",
    milestones:[],
  // }, {
  //   "id": uid(),
  //   "title": "Horizontal bottom-line utilisation",
  //   "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  //   "priority": 1,
  //   "status": 1,
  //   "createdAt": "11/12/2023",
  //   "updatedAt": "12/3/2023",
  //   "deadLine": "9/22/2023",
  //   milestones:[],
  // }, {
  //   "id": uid(),
  //   "title": "Universal didactic framework",
  //   "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  //   "priority": 3,
  //   "status": 1,
  //   "createdAt": "12/13/2023",
  //   "updatedAt": "9/29/2023",
  //   "deadLine": "1/7/2024",
  //   milestones:[],
  // }, {
  //   "id": uid(),
  //   "title": "Polarised maximized function",
  //   "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  //   "priority": 4,
  //   "status": 2,
  //   "createdAt": "6/5/2023",
  //   "updatedAt": "6/22/2023",
  //   "deadLine": "1/26/2024",
  //   milestones:[],
  // }, {
  //   "id": uid(),
  //   "title": "Customizable 4th generation projection",
  //   "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  //   "priority": 4,
  //   "status": 1,
  //   "createdAt": "12/11/2023",
  //   "updatedAt": "8/31/2023",
  //   "deadLine": "1/22/2024",
  //   milestones:[],
  }, /*{
    "id": 7,
    "title": "Cloned fresh-thinking solution",
    "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    "priority": 2,
    "status": 1,
    "createdAt": "3/21/2023",
    "updatedAt": "7/30/2023",
    "deadLine": "3/31/2023"
  }, {
    "id": 8,
    "title": "Optimized grid-enabled methodology",
    "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    "priority": 5,
    "status": 2,
    "createdAt": "1/12/2024",
    "updatedAt": "5/17/2023",
    "deadLine": "1/28/2024"
  }, {
    "id": 9,
    "title": "Devolved transitional project",
    "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    "priority": 3,
    "status": 2,
    "createdAt": "10/21/2023",
    "updatedAt": "8/12/2023",
    "deadLine": "7/10/2023"
  }, {
    "id": 10,
    "title": "Sharable empowering matrix",
    "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    "priority": 1,
    "status": 2,
    "createdAt": "5/22/2023",
    "updatedAt": "3/5/2024",
    "deadLine": "11/22/2023"
  }, {
    "id": 11,
    "title": "Realigned high-level product",
    "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    "priority": 3,
    "status": 2,
    "createdAt": "5/16/2023",
    "updatedAt": "7/3/2023",
    "deadLine": "2/16/2024"
  }, {
    "id": 12,
    "title": "Quality-focused homogeneous paradigm",
    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    "priority": 5,
    "status": 2,
    "createdAt": "9/2/2023",
    "updatedAt": "1/13/2024",
    "deadLine": "2/17/2024"
  }, {
    "id": 13,
    "title": "Configurable 24/7 orchestration",
    "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    "priority": 1,
    "status": 3,
    "createdAt": "10/2/2023",
    "updatedAt": "11/21/2023",
    "deadLine": "2/25/2024"
  }, {
    "id": 14,
    "title": "Upgradable context-sensitive interface",
    "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    "priority": 5,
    "status": 3,
    "createdAt": "11/21/2023",
    "updatedAt": "3/12/2024",
    "deadLine": "3/27/2023"
  }, {
    "id": 15,
    "title": "Virtual multimedia software",
    "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    "priority": 5,
    "status": 1,
    "createdAt": "3/19/2023",
    "updatedAt": "9/13/2023",
    "deadLine": "5/2/2023"
  }, {
    "id": 16,
    "title": "Networked uniform migration",
    "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    "priority": 3,
    "status": 1,
    "createdAt": "12/1/2023",
    "updatedAt": "5/2/2023",
    "deadLine": "2/23/2024"
  }, {
    "id": 17,
    "title": "Synergized demand-driven monitoring",
    "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    "priority": 2,
    "status": 3,
    "createdAt": "6/6/2023",
    "updatedAt": "5/31/2023",
    "deadLine": "10/23/2023"
  }, {
    "id": 18,
    "title": "Enterprise-wide intermediate hierarchy",
    "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    "priority": 1,
    "status": 1,
    "createdAt": "5/18/2023",
    "updatedAt": "11/16/2023",
    "deadLine": "3/17/2023"
  }, {
    "id": 19,
    "title": "Customer-focused asymmetric encoding",
    "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    "priority": 4,
    "status": 1,
    "createdAt": "6/15/2023",
    "updatedAt": "2/2/2024",
    "deadLine": "2/8/2024"
  }, {
    "id": 20,
    "title": "Ameliorated heuristic structure",
    "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    "priority": 3,
    "status": 1,
    "createdAt": "8/1/2023",
    "updatedAt": "4/29/2023",
    "deadLine": "9/29/2023"
  }, {
    "id": 21,
    "title": "Innovative optimal capacity",
    "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    "priority": 4,
    "status": 3,
    "createdAt": "5/22/2023",
    "updatedAt": "11/12/2023",
    "deadLine": "10/16/2023"
  }, {
    "id": 22,
    "title": "Object-based 24/7 internet solution",
    "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    "priority": 4,
    "status": 2,
    "createdAt": "10/1/2023",
    "updatedAt": "8/6/2023",
    "deadLine": "7/19/2023"
  }, {
    "id": 23,
    "title": "Automated didactic time-frame",
    "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    "priority": 1,
    "status": 2,
    "createdAt": "7/24/2023",
    "updatedAt": "4/19/2023",
    "deadLine": "3/21/2023"
  }, {
    "id": 24,
    "title": "Expanded mobile orchestration",
    "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    "priority": 4,
    "status": 3,
    "createdAt": "8/14/2023",
    "updatedAt": "6/3/2023",
    "deadLine": "7/12/2023"
  }, {
    "id": 25,
    "title": "Adaptive zero defect database",
    "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    "priority": 3,
    "status": 1,
    "createdAt": "5/31/2023",
    "updatedAt": "7/20/2023",
    "deadLine": "2/5/2024"
  }, {
    "id": 26,
    "title": "Compatible logistical installation",
    "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    "priority": 1,
    "status": 1,
    "createdAt": "11/12/2023",
    "updatedAt": "1/24/2024",
    "deadLine": "6/2/2023"
  }, {
    "id": 27,
    "title": "Assimilated solution-oriented model",
    "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    "priority": 1,
    "status": 2,
    "createdAt": "9/13/2023",
    "updatedAt": "12/13/2023",
    "deadLine": "11/18/2023"
  }, {
    "id": 28,
    "title": "Profound composite artificial intelligence",
    "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    "priority": 5,
    "status": 1,
    "createdAt": "10/19/2023",
    "updatedAt": "4/15/2023",
    "deadLine": "7/15/2023"
  }, {
    "id": 29,
    "title": "Self-enabling regional hierarchy",
    "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    "priority": 1,
    "status": 2,
    "createdAt": "3/14/2023",
    "updatedAt": "11/2/2023",
    "deadLine": "5/23/2023"
  }, {
    "id": 30,
    "title": "Versatile tangible system engine",
    "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "priority": 1,
    "status": 2,
    "createdAt": "7/16/2023",
    "updatedAt": "6/12/2023",
    "deadLine": "1/31/2024"
  }, {
    "id": 31,
    "title": "Customizable encompassing hub",
    "description": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    "priority": 2,
    "status": 1,
    "createdAt": "11/9/2023",
    "updatedAt": "5/10/2023",
    "deadLine": "2/12/2024"
  }, {
    "id": 32,
    "title": "Up-sized neutral secured line",
    "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    "priority": 5,
    "status": 2,
    "createdAt": "10/30/2023",
    "updatedAt": "4/13/2023",
    "deadLine": "8/16/2023"
  }, {
    "id": 33,
    "title": "Managed bi-directional benchmark",
    "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    "priority": 5,
    "status": 1,
    "createdAt": "11/24/2023",
    "updatedAt": "11/25/2023",
    "deadLine": "4/12/2023"
  }, {
    "id": 34,
    "title": "Switchable foreground ability",
    "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    "priority": 5,
    "status": 1,
    "createdAt": "3/19/2023",
    "updatedAt": "4/11/2023",
    "deadLine": "4/7/2023"
  }, {
    "id": 35,
    "title": "Enhanced intermediate groupware",
    "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    "priority": 3,
    "status": 1,
    "createdAt": "12/22/2023",
    "updatedAt": "4/4/2023",
    "deadLine": "6/13/2023"
  }, {
    "id": 36,
    "title": "Right-sized fresh-thinking installation",
    "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    "priority": 4,
    "status": 3,
    "createdAt": "2/23/2024",
    "updatedAt": "8/31/2023",
    "deadLine": "12/26/2023"
  }, {
    "id": 37,
    "title": "Robust secondary neural-net",
    "description": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "priority": 3,
    "status": 2,
    "createdAt": "1/28/2024",
    "updatedAt": "7/12/2023",
    "deadLine": "3/9/2024"
  }, {
    "id": 38,
    "title": "Digitized 24/7 superstructure",
    "description": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    "priority": 5,
    "status": 1,
    "createdAt": "11/27/2023",
    "updatedAt": "1/8/2024",
    "deadLine": "9/2/2023"
  }, {
    "id": 39,
    "title": "Ameliorated bi-directional process improvement",
    "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    "priority": 1,
    "status": 1,
    "createdAt": "1/6/2024",
    "updatedAt": "5/21/2023",
    "deadLine": "5/11/2023"
  }, {
    "id": 40,
    "title": "Public-key content-based policy",
    "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    "priority": 4,
    "status": 2,
    "createdAt": "11/23/2023",
    "updatedAt": "11/10/2023",
    "deadLine": "9/21/2023"
  }, {
    "id": 41,
    "title": "User-friendly dynamic ability",
    "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    "priority": 1,
    "status": 3,
    "createdAt": "7/19/2023",
    "updatedAt": "8/28/2023",
    "deadLine": "12/29/2023"
  }, {
    "id": 42,
    "title": "Proactive multi-state adapter",
    "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    "priority": 5,
    "status": 2,
    "createdAt": "9/13/2023",
    "updatedAt": "11/3/2023",
    "deadLine": "11/16/2023"
  }, {
    "id": 43,
    "title": "Networked next generation hub",
    "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    "priority": 1,
    "status": 1,
    "createdAt": "3/13/2024",
    "updatedAt": "7/1/2023",
    "deadLine": "11/14/2023"
  }, {
    "id": 44,
    "title": "Reverse-engineered high-level frame",
    "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    "priority": 1,
    "status": 1,
    "createdAt": "8/31/2023",
    "updatedAt": "10/18/2023",
    "deadLine": "7/8/2023"
  }, {
    "id": 45,
    "title": "Extended explicit initiative",
    "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    "priority": 4,
    "status": 3,
    "createdAt": "9/21/2023",
    "updatedAt": "7/26/2023",
    "deadLine": "8/21/2023"
  }, {
    "id": 46,
    "title": "Digitized optimal throughput",
    "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "priority": 5,
    "status": 2,
    "createdAt": "2/28/2024",
    "updatedAt": "6/30/2023",
    "deadLine": "12/5/2023"
  }, {
    "id": 47,
    "title": "Vision-oriented content-based data-warehouse",
    "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    "priority": 4,
    "status": 1,
    "createdAt": "8/30/2023",
    "updatedAt": "5/24/2023",
    "deadLine": "6/24/2023"
  }, {
    "id": 48,
    "title": "Mandatory eco-centric capability",
    "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    "priority": 4,
    "status": 1,
    "createdAt": "10/3/2023",
    "updatedAt": "3/7/2024",
    "deadLine": "10/31/2023"
  }, {
    "id": 49,
    "title": "Cross-platform fresh-thinking hub",
    "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    "priority": 2,
    "status": 2,
    "createdAt": "7/4/2023",
    "updatedAt": "10/15/2023",
    "deadLine": "12/3/2023"
  }, {
    "id": 50,
    "title": "Multi-lateral optimal infrastructure",
    "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "priority": 3,
    "status": 2,
    "createdAt": "1/22/2024",
    "updatedAt": "3/3/2024",
    "deadLine": "9/20/2023"
  }*/
]