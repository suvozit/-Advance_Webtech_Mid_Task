
import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { CourseService } from '../course/course.service.js';
import type { NotificationService } from '../notification/notification.service.js';
@Injectable()
export class EnrollmentService {
  constructor(
  private courseService: CourseService,
  @Inject(forwardRef(() => 'NOTIFICATION_SERVICE'))
  private notificationService: NotificationService,
) {}

  getEnrollments() {
    return {
      message: 'All enrollments fetched',
      data: [],
    };
  }

  enrollStudent(studentName: string, courseId: string) {
    const course = this.courseService.getCourseById(courseId);

    const notification = this.notificationService.sendNotification(
      studentName,
      'Enrollment successful',
    );

    return {
      message: 'Student enrolled successfully',
      student: studentName,
      course,
      notification,
    };
  }
}
