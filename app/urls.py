from django.urls import path
from . import views

urlpatterns = [
    path("reports", views.reports, name="app-reports"),
    path("dashboard", views.dashboard, name="app-dashboard"),
    path("datatables", views.datatables, name="app-datatables"),
    path("area-chart", views.area_chart, name="app-area-chart"),
    path("", views.index, name="app-index")
]
